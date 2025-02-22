import Student from "../Modal/Student.js";


export const Register = async (req, res) => {
    try {
        const { name, email, phone, gender, age, education, des } = req.body;

        // Check if all required fields are present
        if (!name || !email || !phone || !gender || !age || !education || !des) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Create a new student instance
        const newStudent = new Student({
            name, email, phone, gender, age, education, des
        });

        // Save the student data
        await newStudent.save();

        return res.status(201).json({
            success: true,
            message: 'Registered Successfully'
        });
    } catch (error) {
        console.error("Error in Register function:", error);
        return res.status(500).json({
            success: false,
            message: `Server Error: ${error.message}`
        });
    }
};



export const getStudent = async (req, res) => {
    try {
        const data = await Student.find();
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Data Not Found "
            })
        }

        return res.status(200).json({
            success: true,
            data,
            message: "Data Found  Successfully"
        })

    } catch (error) {

    }

}

export const DeleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        await Student.findByIdAndDelete(id);


        res.status(200).json({
            Success: true,
        })
    } catch (error) {

    }

}

export const UpdateStudent = async (req, res) => {
    try {
        const { id } = req.params
        const updateData = req.body
        await Student.findByIdAndUpdate(id, updateData,{new:true});
        return res.status(200).json({
            success: true,
            message: 'Updated Successfully'
        })
    } catch (error) {

    }

}
