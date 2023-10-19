const Circle = ({number}) => {
    return (
        <div className={`w-[50px] mt-[20px] mr-[15px] h-[50px] rounded-[50px] justify-center text-white items-center flex bg-red-400`}>
            {number}
        </div>
    )
};

export default Circle;