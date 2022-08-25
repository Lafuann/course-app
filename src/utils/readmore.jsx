import React, { useCallback, useState } from "react";
import DOMPurify from "dompurify";
import trimText from "./trimText";
// import htmr from "htmr";

const ReadMore = ({ htmlText }) => {
  // const sanitized = () => ({ __html: DOMPurify.sanitize(htmlText) });
  const sanitizer = DOMPurify.sanitize;
  // const text = htmr(sanitizer(`${children}`));
  const [data, setData] = useState({
    showOriginalHTML: false,
    originalHTML: htmlText,
    trimmedText: trimText(sanitizer(htmlText), 200, 200)[0],
  });
  const toggleReadMore = useCallback(() => {
    setData((prevState) => ({
      ...prevState,
      showOriginalHTML: !prevState.showOriginalHTML,
    }));
  }, [setData]);

  return (
    <div className="container">
      <div
        className="text"
        dangerouslySetInnerHTML={{
          __html: `${
            !data.showOriginalHTML ? data.trimmedText : data.originalHTML
          }`,
        }}
      />
      <button className="read-more" onClick={toggleReadMore}>
        {!data.showOriginalHTML ? "Read more" : "Show less"}
      </button>
    </div>
  );
};

export default ReadMore;
