import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { SignupInput } from "@shiruvati_narasimha/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";


export const Auth = ( {type}:{type: "signup" | "signin"}) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    });
     
   async function sendRequest() {
       try{
          const response = await axios.post(`${BACKEND_URL}/api/v1/user/${ type === "signup" ? "signup":
            "signin"}`, postInputs)
          const jwt = response.data;
          localStorage.setItem("token", jwt);
          navigate("/blogs")
        } catch(e) {

        }

    }
    
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
           <div>
              <div className="px-10">
                 <div className="text-3xl font-extrabold">
                     Create an account
                 </div>
                 <div className="text-slate-600">
                        { type === "signin" ?"Don't have an account?": "Already have an account? "}
                     <Link className="pl-2 underline" to={type==="signin" ? "/signup": "/signin"}>
                      {type === "signin" ? "signup" : "signin"}
                     </Link>
                </div> 
            </div>
           <div className="pt-8">
           {type === "signup" ? <LabelledInputs label="Username" type={"text"} placeholder="Your Name..." onChange={(e) =>{
                   setPostInputs({
                      ...postInputs,
                      name : e.target.value
               })
           }} /> :null}
            <LabelledInputs label="Email" type={"text"} placeholder="example@gmail.com" onChange={(e) =>{
               setPostInputs({
                  ...postInputs,
                  username : e.target.value
               })
           }}/>
           <LabelledInputs label="password" type={"password"} placeholder="1234232" onChange={(e) =>{
               setPostInputs({
                  ...postInputs,
                  password : e.target.value
               })
           }}/>           
            </div>
            <div>
     <button onClick={sendRequest} type="button" className="m-10 w-64 text-white bg-gray-800 hover:bg-gray-900 
           focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg 
           text-sm  py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700
         dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sig up": "Signin"}</button>
         </div>
           </div>
        </a>
        </div>        
    </div>
    
}


interface    LabelledInputsType{
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type : string;
}

function LabelledInputs({ label, placeholder, onChange, type}: LabelledInputsType) {
    return <div>
    <label className="block mb-2 text-sm font-bold text-black">{label}</label>
    <input onChange={onChange} type={ type ||"text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
    focus:ring-blue-500 focus:border-blue-400 block w-full p-2.5 " 
    placeholder={placeholder} required />
</div>

}