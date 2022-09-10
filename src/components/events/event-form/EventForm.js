import { useState } from "react";

const validations = {
  title: (value) => {
    let message;
    if (!value) {
      message = "Event title is required";
    }
    return message;
  },
  date: (value) => {
    let message;
    if (!value) {
      message = "Event date is required";
    }
    return message;
  },
  poster: (value) => {
    let message;
    if (!value) {
      message = "Event poster is required";
    }
    return message;
  },
};

const initialState = {
  event: {
    title: "",
    date: "",
    poster: "",
  },
  errors: {
    title: validations.title(""),
    date: validations.date(""),
    poster: validations.poster(""),
  },
  touch: {
    title: false,
    date: false,
    poster: false,
  },
};

function EventForm() {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((state) => {
      return {
        ...state,
        event: {
          ...state.event,
          [name]: value,
        },
        errors: {
          ...state.errors,
          [name]: validations[name] && validations[name](value),
        },
      };
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;

    setState((state) => {
      return {
        ...state,
        touch: {
          ...state.touch,
          [name]: true,
        },
      };
    });
  };

  const { event, errors } = state;

  return (
    <>
      <form>
        <div className="mb-3 input-group">
          <span className="input-group-text">
            <i className="fa fa-tag fa-fw"></i>
          </span>
          <input
            type="text"
            name="title"
            value={event.title}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
            placeholder="Event title"
          />
          {errors.title && (
            <div className="invalid-feedback">{errors.title}</div>
          )}
        </div>
        <div className="mb-3 input-group">
          <span className="input-group-text">
            <i className="fa fa-calendar fa-fw"></i>
          </span>
          <input
            type="date"
            name="date"
            value={event.date}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-control ${errors.date ? "is-invalid" : ""}`}
            placeholder="Event date"
          />
          {errors.date && <div className="invalid-feedback">{errors.date}</div>}
        </div>
        <div className="mb-3 input-group">
          <span className="input-group-text">
            <i className="fa fa-picture-o fa-fw"></i>
          </span>
          <input
            type="text"
            name="poster"
            value={event.poster}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-control ${errors.poster ? "is-invalid" : ""}`}
            placeholder="Event poster"
          />
          {errors.poster && (
            <div className="invalid-feedback">{errors.poster}</div>
          )}
        </div>
      </form>
    </>
  );
}

export default EventForm;
