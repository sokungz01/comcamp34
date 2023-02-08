export type Personal = {
   prefix: string;
   firstname: string;
   middlename: string;
   surname: string;
   nickname: string;
   date: string;
   month: string;
   birth_year: string;
   mobile: string;
   email: string;
   province: string;
   shirt_size: string;
   medicine: string;
   allergic_medicine: string;
   underlying: string;
   travelby: string;
   allergic: string;
   special: string;
   notebook: boolean;
};

export interface Education {
   school_name: string;
   location: string;
   grade: string;
   study_plan: string;
   gpax: string;
   university_1: string;
   facalty_1: string;
   major_1: string;
   university_2: string;
   facalty_2: string;
   major_2: string;
   university_3: string;
   facalty_3: string;
   major_3: string;
};
export interface Interest {
   status: boolean;
   course: string;
   a: string;
   camp1: string;
   by1: string;
   camp2: string;
   by2: string;
   no_previous_camp: boolean;
};
export interface ParentData {
   parent_prefix: string;
   parent_firstname: string;
   parent_middlename: string;
   parent_surname: string;
   parent_relation: string;
   parent_mobile: string;
   parent_email: string;
   same_parent: boolean;
   emergency_prefix: string;
   emergency_firstname: string;
   emergency_middlename: string;
   emergency_surname: string;
   emergency_relation: string;
   emergency_mobile: string;
   emergency_email: string;
};
export interface UploadFile {
   image_URL: string;
   agreement_URL: string;
   card_URL: string;
   pp7_URL: string;
   pp1_URL: string;
};

export interface QuestionPage1 {
   q1: string;
   q2: string;
   q3: string;
};
export interface QuestionPage2 {
   q4: string;
   q5: string;
   q6: string;
};
