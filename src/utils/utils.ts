const utils = () => {
    /** https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView  */
    const scrollToBottomAutomatically = (elementId: string) => {
        document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    };

    return {
        scrollToBottomAutomatically,
    };
};

export default utils;
