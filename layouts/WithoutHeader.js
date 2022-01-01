import Header from "../components/Header";

export default function WithoutHeader(props) {
    return (
        <>
            {props.children}
        </>
    )
}
