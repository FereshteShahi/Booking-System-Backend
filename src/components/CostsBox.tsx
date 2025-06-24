
type CostsBoxProps = {
    price: string;
    text: string;
}

export function CostsBox({ price, text }: CostsBoxProps) {
    return (
        <div className="w-[174px] h-[180px] rounded">
            <div className="bg-[#F8EFD7]">
                <h4 className="py-4 text-black">{price}</h4>
                <div className="bg-[rgba(153,191,170,0.5)] w-[173px] h-[105px]">
                    <p className="p-4 !text-[13px]">{text}</p>
                </div>
            </div>

        </div>
    )
}