import { Button, Card, Form, Input } from "antd";
import log_img from "../../../assets/login/login_page.jpg";
import { LockOutlined, UserOutlined} from "@ant-design/icons" 
import { Link } from "react-router-dom";
import HomeLayout from "../../../layout/HomeLayout";


const {Item} = Form ;

const Signup = () => {
  return (
   <HomeLayout>
     <div className="flex">
      <div className="w-1/2 hidden md:flex items-center justify-center">
        <img src={log_img} alt="bank" className="w-4/5 object-contain"/>
      </div>
      <div className="w-full  md:w-1/2 flex items-center justify-center p-2 md: p-6 bg-w">
         <Card className="w-full max-w-sm shadow-xl">
          <h1 className="font-bold text-[#FF735C] text-2xl text-center mb-6">
            Tracker Your Expense
          </h1>
           <Form
          name ="login_form"
          layout="vertical"
         >
          <Item
          name="Email"
          label="Username"
          rules={[{required:"true"}]}
          >
            <Input prefix={<UserOutlined/>}
             placeholder="Enter Your Username"
            />

          </Item>

          <Item
          name="Password"
          label="Password"
          rules={[{required:"true"}]}
          >
            <Input.Password 
            prefix={<LockOutlined/>}
             placeholder="Enter Your Password"
            />
          </Item>

         <Item
          name="RePassword"
          label="Password"
          rules={[{required:"true"}]}
          >
            <Input.Password 
            prefix={<LockOutlined/>}
             placeholder="Enter Your Password Again"
            />


          </Item>

          <Item>
            <Button type="text"
            htmlType="submit"
            block
            className="!bg-[#FF735C] !text-white !font-bold" >
              Login
            </Button>
            
          </Item>
         </Form>
         <div className="flex items-center justify-between">
          <Link 
          style={{textDecoration:"underline"}}
          to='#'
          className="!text-[#FF735C] !font-bold"
         
          > Forget Password</Link>
          <Link
           style={{textDecoration:"underline"}}
          to='/'
          className="!text-[#FF735C] !font-bold"
          
          >Already Have Account?</Link>
         </div>
         </Card>
        
      </div>
    </div>
   </HomeLayout>
  );
};

export default Signup;
