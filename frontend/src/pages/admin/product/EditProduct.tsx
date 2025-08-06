import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import {Link, useNavigate, useParams} from "react-router-dom";
import {zodResolver} from "@hookform/resolvers/zod";
import {productSchema} from "@/common/validation/productSchema";
import axiosInstance from "@/configs/axios";
import {toast} from "react-toastify";

const EditProduct = () => {
  const { id } = useParams()
  const nav = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({resolver: zodResolver(productSchema)})
  useEffect(() => {
    const fetch = async () => {
      try {
          const res = await axiosInstance.get(`/products/${id}`)
        reset(res.data)
      } catch (error) {
          console.error(error);
      }
    }
    fetch()
  }, [id, reset]);

  const onSubmit = async ( data: any) => {
    try {
      const res = await axiosInstance.put(`/products/${id}`, data);
      reset();
      toast.success("Sửa sản phẩm mới thành công")
      nav("/admin/products")
      console.log(res);
    } catch (error) {
      console.error(error);
    }

  }
  return (
      <div className={"bg-white w-full min-h-screen px-4 sm:px-8 md:px-12 lg:px-24 py-8"}>
        <div className={"flex justify-between items-center mb-10 sm:mb-16"}>
          <h1 className={"font-bold text-3xl sm:text-4xl mb-10 sm:mb-16"}>Cập nhập sản phẩm</h1>
          <Button>
            <Link to={"/admin/products"}>Quay về</Link>
          </Button>
        </div>
        <div className={"bg-gray-100 w-[1200px] rounded-3xl p-6 sm:p-10 overflow-x-auto"}>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
            <div className="mb-5">
              <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tên sản phẩm
              </label>
              <input
                  type="text"
                  id="title"
                  className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                  placeholder="Nhập tên sản phẩm"
                  {...register("title")}
              />
              {errors.title && <p className="text-red-500 text-xs italic">{errors.title.message}</p>}
            </div>
            <div className="mb-5">
              <label
                  htmlFor="number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Giá
              </label>
              <input
                  type="number"
                  id="price"
                  className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                  {...register("price", { valueAsNumber: true })}
              />
              {errors.price && <p className="text-red-500 text-xs italic">{errors.price.message}</p>}
            </div>
            <div className="mb-5">
              <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mô tả
              </label>
              <input
                  type="text"
                  id="description"
                  className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                  {...register("description")}
              />
              {errors.description && <p className="text-red-500 text-xs italic">{errors.description.message}</p>}
            </div>
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Thêm sản phẩm
            </button>
          </form>

        </div>
      </div>
  );
};

export default EditProduct;
