import {ThreeDots} from "react-loader-spinner";

function Loading({width=75, height=40}) {
    return (
        <ThreeDots
            height={height}
            width={width}
            radius={9}
            wrapperClass={'flex justify-center'}
            color="var(--color-primary-900)"
            visible={true}
        />
    );
}

export default Loading;