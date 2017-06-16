<template>
  <section id="App-question">
    <h2>{{question.text}}</h2>
    <ul>
      <li class="App-answer" v-for="answer in question.answers">
        <input
          type="radio"
          :name="question.uuid"
          :value="answer.uuid"
          v-on:click="onAnswerClick"
        />
        {{answer.text}}
      </li>
    </ul>
  </section>
</template>

<script>
import eventbus from "../eventbus";

export default {
  name: "QuestionComponent",
  props: {
    question: Object,
  },
  methods: {
    onAnswerClick(evt) {
      const aUuid = evt.target.value;
      console.log("QuestionComponent.onAnswerClick caught local click event, " +
        "re-emitting via global eventbus", aUuid);
      eventbus.emit("ANSWER_CLICKED_EVT", aUuid);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#App-question {
  max-width: 50%;
}

.App-question li {
  display: inline-block;
  margin: 0 10px;
}

.App-answer {
  background-color: ;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  margin: 0.3em;
  font-size: larger;
}

.App-answer input {
  margin: 0.5em;
  font-size: 2em;
}
</style>
