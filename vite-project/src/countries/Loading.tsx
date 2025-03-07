interface ILoadingProps {
    loading: boolean;
    children?: React.ReactNode; 
}

const Loading: React.FC<ILoadingProps> = (props) => {
    const { loading } = props;
    if (loading) {
        return <>loading...</>;
    }
    return <>{props.children}</>;
}

export default Loading;
