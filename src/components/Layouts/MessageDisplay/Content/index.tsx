import Button from "../../../Button";
import { buttonProps } from "./props";
import { imgWrapper } from "./styles"

function Content() {
    return (
        <div>
            <div className="mx-auto" style={imgWrapper}>
                <img className="mx-auto" alt="Ảnh của trang web" src="https://static.whatsapp.net/rsrc.php/v3/y6/r/wa669aeJeom.png" />
            </div>
            <div>
                <h1 className="w-4/5 mx-auto text-3xl font-light text-center text-slate-300 mt-7">Tải xuống WhatsApp cho Windows</h1>
                <h3 className="w-4/5 mx-auto mt-6 font-normal text-center text-gray-400">Hãy tải xuống ứng dụng cho Windows để gọi điện, chia sẻ màn hình và tận hưởng trải nghiệm nhanh hơn.</h3>
            </div>
            <div className="flex justify-center mt-6">
                <Button {...buttonProps} />
            </div>
        </div>
    );
}

export default Content;