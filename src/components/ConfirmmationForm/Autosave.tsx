import { memo, useCallback } from "react";
import debounce from "debounce";
import { useFormContext, useWatch } from "react-hook-form";
import useDeepCompareEffect from "use-deep-compare-effect";

type Props = {
   defaultValues: any;
   onSubmit: any;
};

const AutoSave = memo(({ defaultValues, onSubmit }: Props) => {
   const methods = useFormContext();

   // Save if this function is called and then not called again within 1000ms

   const debouncedSave = useCallback(
      debounce(() => {
         console.log("Saving");
         methods.handleSubmit(onSubmit)();
      }, 1000),
      [],
   );

   // // Watch all the data, provide with defaultValues from server, this way we know if the new data came from server or where actually edited by user
   // const watchedData = methods.watch(undefined, defaultValues);
   const watchedData = useWatch({
      control: methods.control,
      defaultValue: defaultValues,
   });

   useDeepCompareEffect(() => {
      // console.log("Triggered");
      if (methods.formState.isDirty) {
         debouncedSave();
      }
   }, [watchedData]);

   return <div>{methods.formState.isSubmitting && <h1>saving....</h1>}</div>;
});

AutoSave.displayName = "AutoSave123";

export default AutoSave;
