import React, { Fragment } from "react"

const TaskButtons = ({ task, removeTask }) => {

  return (
    <>
      {!task.done ? (
        <button onClick={removeTask(task.id)}>Concluído</button>
      ) : null}
    </>
  );
};

export default TaskButtons
