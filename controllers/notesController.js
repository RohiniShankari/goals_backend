import Note from "../models/Note.js";
export async function getAllNotes(req,res){
    try{
        const notes=await Note.find().sort({createdAt:-1});
        res.status(200).json(notes);
    }catch(error){
        console.error("error while fetching notes");
        res.send(500).json({message:"internal server error"});

    }
};
export async function createNote(req,res){
    try{
       
        const {title,content}=req.body;
        const newNote=new Note({title,content});
        await newNote.save();
        res.status(201).json({message:"Note created successfully"});
    }catch(error){
        console.error("error while creating a note",error);
        res.status(500).json({message:"internal server error"});
    }
};
export async function updateNote(req,res){
    try{
        const {title,content}=req.body;
        const updatedNote=await Note.findByIdAndUpdate(req.params.id,{title,content});
        if(!updatedNote){
            res.status(404).json({message:"note not found"});
        }
        res.status(200).json({message:"updated note successfully"});

    }catch(error){
        console.error("error while updating note",error);
        res.status(500).json({message:"internal server error"});
    }
};

export async function deleteNote(req,res){
    try{
        const deletedNote=await Note.findByIdAndDelete(req.params.id);
        if(! deletedNote){
            res.status(404).json({message:"not found the note to delete"});
        }
        res.status(200).json({message:"deleted the note"});

    }catch(error){
         console.error("error while deleting note",error);
        res.status(500).json({message:"internal server error"});
    }
};
export async function getNodeById(req,res){
    try{
        const note=await Note.findById(req.params.id);
        if(!note){
            res.status(404).json({message:"note not found"});
        }
        res.status(200).json(note);
    }catch(error){
        console.error("error while fetching note");
        res.send(500).json({message:"internal server error"});

    }
};