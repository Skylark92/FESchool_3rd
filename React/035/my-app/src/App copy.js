function Three(props) {
    return <div>가격 : {props.value}</div>;
}

function Two(props) {
    return (
        <div>
            <Three value={props.value} />
        </div>
    );
}

function One() {
    return (
        <div>
            <Two />
        </div>
    );
}

export default function App() {
    const value = 1000; // 이 값을 three에서 출력하고 싶습니다.
    return (
        <div>
            <One />
            <Two value={value} />
        </div>
    );
}
