import React,{useCallback} from "react";
import { useForm } from "react-hook-form";
import {Input,Button,Select,RTE} from "../index"
import { useNavigate } from "react-router-dom";
import service from "../../appwrite/config";
import { useSelector } from "react-redux";

export default function PostForm({post}){
    const {register,handleSubmit,watch,control,setValue,getValues }=useForm({
        defaultValues: {
            title : post ?.title || "",
            slug : post?.$id || "",
            content : post?.content || "",
            status : post?.status || "active",
        },
    });
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async(data)=>{
        if(post){
            const file = data.image[0] ? await service.uploadFile(data.image[0]) : null;
            if(file){
                service.deleteFile(post.featuredImage);
            }
            const dbPost = await service.updatePost(post.$id,{
                ...data,
                featuredImage : file ? file.$id :undefined,
            })
            if(dbPost){
                navigate(`/post/${dbPost.$id}`);
            }
        }
        else{
            const file = await service.uploadFile(data.image[0]);
            if(file){
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await service.createPost({...data,userId : userData.$id});
                if(dbPost){
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };
}