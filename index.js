const Button = (props) => {
  //  Write your code here.
  const { className, classText } = props;
  return <button className={`${className}`}>{classText}</button>;
};

const element = (
  //  Write your code here.
  <div>
    <h1>Social Buttons</h1>

    <div className="button-container">
      <Button classText="Like" className="like-button" />
      <Button classText="Comment" className="comment-button" />
      <Button classText="Share" className="share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
