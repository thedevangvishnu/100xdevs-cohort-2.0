type EventTye = "click" | "scroll" | "mousemove";
type ExcludeEventType = Exclude<EventTye, "scroll">;

const handleEvents = (event: ExcludeEventType) => {
  console.log(`Event type: ${event}`);
};
