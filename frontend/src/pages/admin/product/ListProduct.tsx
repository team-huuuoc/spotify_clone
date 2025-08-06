import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import useFetch from "@/hooks/useFetch";
import {IProduct} from "@/common/types/Product";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import axiosInstance from "@/configs/axios";
import {toast} from "react-toastify";

const ListProduct = () => {
    const path = "products"
    const [reloadKey, setReloadKey] = React.useState<number>(0)
  const { state } = useFetch({
      path : `/${path}`,
      method : "GET"
  }, reloadKey)
    const products = state.data as IProduct[]  | undefined
    const handleDelete = async (id: number) => {
        try {
            if (window.confirm("Bạn chắc chắn xóa chưa")){
                await axiosInstance.delete(`/products/${id}`, {method: "DELETE"})
                toast.success("Xóa sản phẩm thành công")
                setReloadKey(reloadKey + 1)
            }
        } catch (error) {
            console.error(error);
        }

    }
  return (
      <div className={"bg-white w-full min-h-screen px-4 sm:px-8 md:px-12 lg:px-24 py-8"}>
          <div className={"flex justify-between items-center mb-10 sm:mb-16"}>
              <h1 className={"font-bold text-3xl sm:text-4xl mb-10 sm:mb-16"}>Danh sách sản phẩm</h1>
              <Button>
                  <Link to={"/admin/products/add"}>Add Product</Link>
              </Button>
          </div>
          <div className={"bg-gray-100 rounded-3xl p-6 sm:p-10 overflow-x-auto"}>

              <Table className="table-fixed w-full">
                  <TableHeader>
                      <TableRow>
                          <TableHead className="w-[8%]">Stt</TableHead>
                          <TableHead className="w-[25%]">Tên sản phẩm</TableHead>
                          <TableHead className="w-[15%]">Giá</TableHead>
                          <TableHead className="w-[37%]">Mô tả</TableHead>
                          <TableHead className="w-[15%] text-center">Action</TableHead>
                      </TableRow>
                  </TableHeader>
                  <TableBody>
                      {products?.map((product, index) => (
                              <TableRow key={product.id}>
                                  <TableCell className="font-medium">{product.id}</TableCell>
                                  <TableCell>{product.title}</TableCell>
                                  <TableCell>{product.price?.toFixed(2)}$</TableCell>
                                  <TableCell className="truncate">{product.description}</TableCell>
                                  <TableCell className="text-center">
                                      <Link to={`/admin/products/edit/${product.id}`} >
                                          <Button className="text-white bg-blue-400 hover:bg-blue-600 hover:text-black mr-2">Sửa</Button>
                                      </Link>
                                      <Button onClick={() => handleDelete(product.id)} className="text-red-500 hover:text-red-700">Xóa</Button>
                                  </TableCell>
                              </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </div>
      </div>
  );
};

export default ListProduct;