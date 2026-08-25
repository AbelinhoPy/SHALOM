'use server'

//import supabase from "@/config/supabase-config";
import supabase from "@/app/config/supabase-config";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerNewUser = async ({
  name,
  email,
  password,
  role,
}: {
  name: string;
  email: string;
  password: string;
  role: string;
}) => {
  try {
    const { data, error } = await supabase
      .from("user_profiles")
      .select("email")
      .eq("email", email);

    if (error) throw error;

    if (data && data.length > 0) {
      return {
        success: false,
        message: "User already exists",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserObj = {
      name,
      email,
      password: hashedPassword,
      role,
      is_active: true,
    };

    const { error: userError } = await supabase
      .from("user_profiles")
      .insert([newUserObj]);

    if (userError) {
      return {
        success: false,
        message: userError.message || "Error registering user",
      };
    }

    return {
      success: true,
      message: "User registered successfully",
    };

  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Error registering user",
    };
  }
};

export const loginUser = async ({email, password, role}: {email: string, password: string, role: string}) => {
    try  {
      console.log("supabaseUrl:", process.env.SUPABASE_URL);
    //console.log("iniciando registro:", { name, email, role });
    console.log("supabaseUrl:", process.env.SUPABASE_URL);
      

        //find user with the email
        const { data, error } = await supabase.from("user_profiles").select("*").eq("email", email);
        if (error) {
            return {
                success: false,
                message: error.message || "Error logging in",
            };
        }
        if (data.length === 0) {
            return {
                success: false,
                message: "User not found",
            };
        }
        if (data[0].role !== role) {
            return {
                success: false,
                message: "Invalid role",
            };
        }

        //compare password
        const isPasswordValid =  bcrypt.compareSync(password, data[0].password);
        if (!isPasswordValid) {
            return {
                success: false,
                message: "Invalid password",
            };
        }
        //generate jwt token
        const token = jwt.sign(
            { id: data[0].id},
             process.env.JWT_SECRET!,
             { expiresIn: "1d", });
        return {
            success: true,
            data: token,
        };     

    } catch (error: any) {
        return {
            success: false,
            message: error.message || "Error logging in",
        };
    }
};

export const getCurrentUser = async (token: string) => {
    try {
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
        const userId = decoded.id;

        const { data, error } = await supabase.from("user_profiles").select("*").eq("id", userId);
        if(!data || data.length === 0 || error) {
            return {
                success: false,
                message: error?.message || "User not found",
            };
        }

        return {
            success: true,
            data: data[0],
        };
    } catch (error: any) {
        return {
            success: false,
            message: error.message || "Error getting current user",
        };
    } 
  }