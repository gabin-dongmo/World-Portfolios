export const containerStyle: any = {
  display: "flex",
  flexWrap: "wrap",
  alignContent: "space-between",
  gap: 50,
  marginBottom: "20px",
};

export const headerStyle = { alignSelf: "center", fontStyle: "italic" };

export const searchStyle: any = {
  position: "relative",
  overflow: "hidden",
  padding: "0.5rem 2.5rem 0.5rem 1rem",
  outline: "none",
  borderRadius: "5px",
  border: "2px solid rgba($color: $gray, $alpha: 0.3)",
  background: "$light",
  width: "50%",
  fontWeight: "500",
  color: "rgba($color: $gray, $alpha: 0.75)",
};

export const bodyStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "15px",
  "@media screen and (max-width: 1030px)": {
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  },
};
