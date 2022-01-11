import React from "react";
import { useSelector } from "react-redux";
import QuoteCard from "./QuoteCard";

function Quotes() {
  const quotes = useSelector((state) => state.quotes);
  return (
    <div>
      <hr />
      <div className="row justify-content-center">
        <h2>Quotes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {
              /*
              TODO:
              
              Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
              */
              quotes
                .sort((a, b) => b.vote - a.vote)
                .map((q) => (
                  <QuoteCard
                    key={q.id}
                    content={q.content}
                    vote={q.vote}
                    author={q.author}
                    id={q.id}
                  />
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
