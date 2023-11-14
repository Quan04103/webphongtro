import React, { useCallback, useEffect, useState } from "react";
import { useParams, useLocation, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Select } from "../components";
import { path } from "../ultils/constant";
import { Overview, Address, Loading } from "../components";
import { apiUpdatePostAdmin, apiUploadImages } from "../services";
import icons from "../ultils/icons";
import { getCodes, getCodesArea } from "../ultils/Common/getCodes";
import { useSelector } from "react-redux";
import { apiCreatePost } from "../services";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
// import Footer from './Footer'
import {
  Card,
  Input,
  Typography,
  ButtonGroup,
  Button,
  Option,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import * as actions from '../store/actions'
import { CameraIcon } from "@heroicons/react/24/outline";
import { getOnePost, updateOnePost } from "../store/actions";
import { getPosts } from "../store/actions";

const { ImBin } = icons;

export default function EditPost() {
    const navigate = useNavigate();
    const [payload, setPayload] = useState({
        categoryCode: "",
        title: "",
        priceNumber: 0,
        areaNumber: 0,
        images: "",
        address: "",
        priceCode: "",
        areaCode: "",
        description: "",
        province: "",
      });

    const dispatch = useDispatch()
  const { posts } = useSelector((state) => state.post);
  /// Lấy id post
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idpost = searchParams.get("idpost");

  useEffect(() => {
    // Thực hiện các công việc cần thiết với idpost
    console.log("Id của bài viết:", idpost);
  }, [idpost]);
  /////

  useEffect(() => {
    // Kiểm tra xem dữ liệu đã được gán chưa
    if (posts && posts.address) {
      console.log("Địa chỉ của bài viết:", posts.address);
    }
  }, [posts]);

useEffect(() => { 
    dispatch(getOnePost(idpost))

 },[idpost])

 useEffect(() => { 

 },[posts])

  let FirstPayload = {
    ...payload,
    title: posts.title,
    priceNumber: posts.priceNumber,
    areaNumber: posts.areaNumber,
    address: posts.address,
    description: posts.description,
    
  };

useEffect(() => { 
    setPayload(FirstPayload)
 },[posts])
 console.log(payload)

  const [imagesPreview, setImagesPreview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { prices, areas, categories, province } = useSelector(
    (state) => state.app
  );

  const { currentData } = useSelector((state) => state.user);

  const handleFiles = async (e) => {
    e.stopPropagation();
    setIsLoading(true);
    let images = [];
    let files = e.target.files;
    let formData = new FormData();
    for (let i of files) {
      formData.append("file", i);
      formData.append(
        "upload_preset",
        process.env.REACT_APP_UPLOAD_ASSETS_NAME
      );
      let response = await apiUploadImages(formData);
      if (response.status === 200)
        images = [...images, response.data?.secure_url];
    }
    setIsLoading(false);
    setImagesPreview((prev) => [...prev, ...images]);
    //setPayload(prev => ({ ...prev, images: [...prev.images, ...images] }))
  };
  const handleDeleteImage = (image) => {
    setImagesPreview((prev) => prev?.filter((item) => item !== image));
    // setPayload(prev => ({
    //     ...prev,
    //     images: prev.images?.filter(item => item !== image)
    // }))
  };
  const handleSubmit = async () => {
    setPayload(FirstPayload)
    // let priceCodeArr = getCodes(
    //   +payload.priceNumber / Math.pow(10, 6),
    //   prices,
    //   1,
    //   15
    // );
    // let priceCode = priceCodeArr[priceCodeArr.length - 1]?.code;
    // let areaCodeArr = getCodesArea(+payload.areaNumber, areas, 0, 90);
    // let areaCode = areaCodeArr[0]?.code;
    // let finalPayload = {
    //   ...payload,
    //   priceCode,
    //   areaCode,
    //   userId: currentData.id,
    //   priceNumber: +payload.priceNumber / Math.pow(10, 6),
    //   areaNumber: +payload.areaNumber,
    //   label: `${
    //     categories?.find((item) => item.code === payload?.categoryCode)?.value
    //   } ${payload?.address?.split(",")[0]}`,
    // };
    const response = await apiUpdatePostAdmin(idpost,payload);
    console.log(payload);
    if (response?.data.err === 0) {
      Swal.fire("Thành công", "Đã sửa bài đăng mới", "success").then(() => {    
        navigate('/admin');
        setPayload({
          categoryCode: "",
          title: "",
          priceNumber: 0,
          areaNumber: 0,
          images: "",
          address: "",
          priceCode: "",
          areaCode: "",
          description: "",
          province: "",
        });
      });
    } else {
      Swal.fire("Opps!", "Có lỗi gì đó", "error");
    }
  };
  useEffect(() => {console.log(posts)
 },[posts])
  // const CreatePost = () => {
  //     const navigate = useNavigate()
  //     const goPaypost = useCallback((flag) => {
  //         navigate(path.PAY_POST, { state: { flag } })
  //     }, [])
  return (
    <div className="flex flex-col gap-10 bg-white">
      <div className="flex justify-center">
        <div className="gap-5 flex flex-col w-2/3">
          
          <Card className="flex  py-10 border-solid  ">
            <div className="flex justify-center">
              <div className="flex w-3/4 flex-col gap-5">
                <Overview payload={payload} setPayload={setPayload} />
              </div>
            </div>
          </Card>
          <Card className="flex  py-10 border-solid  ">
            <div className="font-semibold flex justify-center">
              <div className="flex w-3/4 flex-col gap-5">
                <h2 className="font-semibold text-xl py-4">
                  Hình ảnh và video
                </h2>
                <div className="flex flex-col gap-0 cursor-default">
                  <Typography variant="small">
                    {" "}
                    Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn
                  </Typography>
                  <Typography variant="small">
                    {" "}
                    Đăng tối đa 224 ảnh với tất cả loại tin
                  </Typography>
                  <Typography variant="small">
                    {" "}
                    Hãy dùng ảnh thật không chèn số điện thoại và trùng
                  </Typography>
                  <Typography variant="small">
                    {" "}
                    Mỗi ảnh có kích thước tối thiểu 100 x 100 px, tối đa 15MB
                  </Typography>
                </div>
                <div className="flex items-center justify-center">
                  <label
                    htmlFor="file"
                    className="w-full   h-[16rem] my-4 flex items-center justify-center bg-gray-200 rounded-md flex-col"
                  >
                    {isLoading ? (
                      <Loading />
                    ) : (
                      <div className="flex flex-col items-center justify-center">
                        <CameraIcon className="w-[10%]" />
                        <h2 className="text-gray-700 font-bold">
                          Bấm hoặc chọn ảnh cần tải{" "}
                        </h2>
                        <p className="text-gray-700 italic text-xs">
                          hoặc kéo thả ảnh vào đây{" "}
                        </p>
                      </div>
                    )}
                  </label>
                </div>
                <div>
                  <input
                    onChange={handleFiles}
                    hidden
                    type="file"
                    id="file"
                    multiple
                  />
                  <div className="w-full">
                    <h3 className="font-semibold py-4">Ảnh đã chọn</h3>
                    <div className="flex gap-4 items-center">
                      {imagesPreview?.map((item) => {
                        return (
                          <div key={item} className="relative w-1/3 h-1/3 ">
                            <img
                              src={item}
                              alt="preview"
                              className="w-full h-full object-cover rounded-md"
                            />
                            <span
                              title="Xóa"
                              onClick={() => handleDeleteImage(item)}
                              className="absolute top-0 right-0 p-2 cursor-pointer bg-gray-400 hover:bg-gray-300 rounded-full"
                            >
                              <ImBin />
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <div className="flex justify-end">
            <button
              className=" bg-orange-400 hover:bg-orange-600 text-white w-[9em] h-[3em] rounded-[30em] text-[15px] drop-shadow-[6px_6px_10px_#c5c5c5]"
              onClick={handleSubmit}
              text="Tạo mới"
              bgColor="bg-green-600"
              textColor="text-white"
            >
              Đăng bài
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
