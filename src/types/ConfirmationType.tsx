export interface DateForm {
    date: string;
    month: string;
    year: string;
 }
 
export type Confirmation = {
   isConfirm: string;
   shirt_size : string;
   describeTravel: string;
   transaction_Name: string;
   transaction_URL: string;
   transaction_date: string;
   transaction_hours: string;
   transaction_minutes: string;
};

export type Page1 = {
   q1_1: string;
   reason_q1_1: string;
   q1_2: string;
   reason_q1_2: string;
   q1_3: string;
   reason_q1_3: string;
}

export type Page2 = {
   q2_1: string;
   q2_2: string;
   q2_3: string;
}

export type Page3 = {
   q3_1: string;
   q3_2: string;
}

export type Page4 = {
   q4_1: string;
}

export type Page5 = {
   q5_1: string;
   q5_2: string;
   q5_3: string;
}