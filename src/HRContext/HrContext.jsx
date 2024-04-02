import { createContext,useState} from "react";

const HrContext = createContext()

export const HrContextProvider = ({children})=>{
    // Global states
    const [data, setData]=useState([
        {
            name: "Aisha Doe",
            role: "Hr Manager",
            Avatar: "../assets/image 111.png",
            employmentType: "Full-Time",
            Status: "Present",
            CheckIn: "09:00 AM",
            CheckOut: "05:00 pM",
            OverTime: "0h",
        },
        {
            name: "Chukwuemeka",
            role: "Software Engr",
            Avatar: "../assets/image 111.png",
            employmentType: "Full-Time",
            Status: "Present",
            CheckIn: "09:00 AM",
            CheckOut: "05:00 pM",
            OverTime: "0h",
        },
        {
            name: "Aisha Doe",
            role: "Hr Manager",
            Avatar: "../assets/image 111.png",
            employmentType: "Full-Time",
            Status: "Present",
            CheckIn: "09:00 AM",
            CheckOut: "05:00 pM",
            OverTime: "0h",
        },
        {
            name: "Aisha Doe",
            role: "Hr Manager",
            Avatar: "../assets/image 111.png",
            employmentType: "Full-Time",
            Status: "Present",
            CheckIn: "09:00 AM",
            CheckOut: "05:00 pM",
            OverTime: "0h",
        },
        {
            name: "Femi",
            role: "Financial Analyst",
            Avatar: "../assets/image 111.png",
            employmentType: "Full-Time",
            Status: "Present",
            CheckIn: "09:00 AM",
            CheckOut: "05:00 pM",
            OverTime: "0h",
        },
        {
            name: "Chukwu Emeka",
            role: "Software Engineer",
            Avatar: "../assets/image 111.png",
            employmentType: "Part-Time",
            Status: "Absent",
            CheckIn: " - ",
            CheckOut: " - ",
            OverTime: "0h",
        },
        {
            name: "Ibukun Oluwadamilare",
            role: "Designer",
            Avatar: "../assets/image 111.png",
            employmentType: "Full-Time",
            Status: "Present",
            CheckIn: "09:00 AM",
            CheckOut: "05:00 pM",
            OverTime: "0h",
        },
        {
            name: "Aisha Doe",
            role: "Hr Manager",
            Avatar: "../assets/image 111.png",
            employmentType: "Full-Time",
            Status: "Present",
            CheckIn: "09:00 AM",
            CheckOut: "05:00 pM",
            OverTime: "0h",
        }
    ])

    const [isLoading, setIsLoading] =useState(true)
     
    
    // Global function
    const date = new Date().toDateString();
    const time = new Date().toLocaleTimeString();
    const currentDay =  new Date().getDate().toLocaleString();
    const currentMonth = new Date().getMonth().toLocaleString();

    // Show & hide spinner function
    
    const showSpinner=()=>{
        setTimeout(()=>{
            setIsLoading(false) 
        },5000)
    }
    
    // show and hide drop down menu
    const [openMenu1, setOpenMenu1] = useState(false)
    const [openMenu2, setOpenMenu2] = useState(false)
    const [openMenu3, setOpenMenu3] = useState(false)
    const [openMenu4, setOpenMenu4] = useState(false)

    const showMenu1 = ()=>{
      setOpenMenu1(!openMenu1);
    }
    const showMenu2 = ()=>{
      setOpenMenu2(!openMenu2);
     
    }
    const showMenu3 = ()=>{
      setOpenMenu3(!openMenu3);
    }
    const showMenu4 = ()=>{
      setOpenMenu4(!openMenu4);
    }
    
    
    
    
    return <HrContext.Provider  value={{
        data,
        isLoading,
        date,
        time,
        showSpinner,
        currentMonth,
        currentDay,
        openMenu1,
        openMenu2,
        openMenu3,
        openMenu4,
        showMenu1,
        showMenu2,
        showMenu3,
        showMenu4
        



        }}>
            {children}
        </HrContext.Provider>

}

export default HrContext