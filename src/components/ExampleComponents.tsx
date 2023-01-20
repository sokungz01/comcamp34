const Example = (
    {prop1,prop2} : {prop1:string,prop2?:string}
) => {
    return(
        <>
            <p className="text-2xl">{prop1}</p>
            <p>{prop2}</p>
        </>
    );
}
export default Example;