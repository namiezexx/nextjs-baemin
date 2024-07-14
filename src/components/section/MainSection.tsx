export default function MainSection() {
    return (
        <section className="h-[80%]">
            <div className="flex flex-wrap">
                {[1,2,3].map((index: number) => (
                    <div key={index}>Card</div>
                ))}
            </div>
            <div>Big card</div>
            <div>banner Carousel</div>
            <div>icon menu horizen</div>
            <div>우리동네 빠른 배달</div>
        </section>
    )
}