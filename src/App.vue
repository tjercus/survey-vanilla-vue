<template>
  <div class="App">
    <header class="App-header">
      <h1>Survey App with vanilla Vue</h1>
    </header>
    <article class="App-content">
      <QuestionComponent :question="currentQuestion" />
      <button class="btn orange" v-on:click="handlePreviousClick">
        <span>previous</span>
      </button>
    </article>
  </div>
</template>

<script>
import QuestionComponent from "./components/Question";
import DataService from "./DataService";
import eventbus from "./eventbus";

const dataService = DataService();

export default {
  name: "app",
  data() {
    return {
      currentQuestion: {},
    };
  },
  components: {
    QuestionComponent,
  },
  methods: {
    handlePreviousClick() {
      if (this.currentQuestion && this.currentQuestion.prevUuid) {
        this.currentQuestion = dataService.findQuestion(this.currentQuestion.prevUuid);
      }
    },
    handleAnswerClick(aUuid) {
      const cq = this.currentQuestion;
      cq.selectedAnswer = aUuid;
      dataService.setAnswer(cq, aUuid);
      this.currentQuestion = dataService.findNextQuestion(cq);
    },
  },
  created() {
    console.log("App.created");
    this.currentQuestion = dataService.firstQuestion();
    eventbus.on("ANSWER_CLICKED_EVT", aUuid => {
      console.log("App.created. caught event from child component", aUuid);
      this.handleAnswerClick(aUuid);
    });
  },
};
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Lato");
  @import "./material-buttons.css";

  body {
    font-family: "Lato", sans-serif;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    color: #42b983;
  }

  .App-header {
    background-color: black;
    height: 5em;
    padding: 2em;
    color: white;
  }

  .App-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .App-content ul {
    list-style: none;
  }

</style>
