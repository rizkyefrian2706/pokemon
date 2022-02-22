const Container = ({ children }) => {
    return (
        <>
            <div className="bg-blue-300 ">
                <div className="container mx-auto px-10">
                {children}
                </div>
            </div>
        </>
    );
}

export default Container;