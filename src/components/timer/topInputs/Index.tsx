import Input from "@/components/custom/Input"

const Index = () => {
    return (
        <article>
            <Input
                label="Hour"
                className=""
                name="hour"
                placeholder="2"
                type="number"
                changeHandler={() => { }}
            />
        </article>
    )
}

export default Index