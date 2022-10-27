const { useEffect } = require("react")

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-News Today Web`;
    }, [title]);
    console.log(title)
}

export default useTitle;