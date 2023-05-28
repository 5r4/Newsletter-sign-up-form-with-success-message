import styled from "styled-components";

const Label = styled.label`
  font-family: "Roboto";
  font-weight: 700;
  color: var(--Dark-Slate-Grey);
`;

const InputStyle = styled.input`
  height: 55px;
  border: 2px solid var(--Grey);
  border-radius: 8px;
  outline: none;
  padding: 25px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 1em;

  &:focus {
    border-color: var(--Dark-Slate-Grey);
  }
`;

export function Input({ hasError = false, onChange, value }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "45px",
      }}
    >
      <div
        className="header"
        style={{
          marginBottom: "15px",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <Label htmlFor="email">Email address</Label>
        <Label
          htmlFor="email"
          style={{
            color: "var(--Tomato)",
            display: hasError ? "block" : "none",
          }}
        >
          Vaild email required
        </Label>
      </div>
      <InputStyle
        id="email"
        placeholder="email@company.com"
        style={{
          ...(hasError
            ? {
                backgroundColor: "ffe8e6",
                color: "var(--Tomato)",
                borderColor: "var(--Tomato)",
              }
            : {}),
        }}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
