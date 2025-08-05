import React from "react";
import TopArrow from "./Assets/TopArrow.png";
import BottomArrow from "./Assets/BottomArrow.png";
import OilsQuestionsAndAnswers from "./Assets/OilsQuestionsAndAnswers.png";

const QuestionsAndAnswers = () => {
  return (
    <div className="Container">
      <div className="QuestionsAndAnswers">
        <h1>Вопросы и ответы</h1>
      </div>
      <div className="QuestionsAndAnswers-Comments">
        <div className="QuestionsAndAnswers-Comments-One">
          <span>
            <h1>Сыродавленное масло холодного отжима?</h1>
            <img src={TopArrow} alt="#" />
          </span>
          <p>
            Кедровое масло — чемпион по питательности и пользе благодаря
            пиноленовой кислоте, которая есть только в хвойных растениях, и
            золотому балансу омеги-3 к омеге-6 — 1:2. Его любят за сладковатый
            знакомый вкус, густоту и яркое послевкусие. Легко усваивается даже у
            малышей.
          </p>
        </div>
        <div className="QuestionsAndAnswers-Comments-Two QuestionsAndAnswers-Comments-All">
          <h1>Сыродавленное масло холодного отжима?</h1>
          <img src={BottomArrow} alt="#" />
        </div>
        <div className="QuestionsAndAnswers-Comments-Three QuestionsAndAnswers-Comments-All">
          <h1>Сыродавленное масло холодного отжима?</h1>
          <img src={BottomArrow} alt="#" />
        </div>
        <div className="QuestionsAndAnswers-Comments-Four QuestionsAndAnswers-Comments-All">
          <h1>Сыродавленное масло холодного отжима?</h1>
          <img src={BottomArrow} alt="#" />
        </div>
        <div className="QuestionsAndAnswers-Comments-Five QuestionsAndAnswers-Comments-All">
          <h1>Сыродавленное масло холодного отжима?</h1>
          <img src={BottomArrow} alt="#" />
        </div>
      </div>
      <div className="QuestionsAndAnswers-img">
        <img src={OilsQuestionsAndAnswers} alt="#" />
      </div>
    </div>
  );
};

export default QuestionsAndAnswers;