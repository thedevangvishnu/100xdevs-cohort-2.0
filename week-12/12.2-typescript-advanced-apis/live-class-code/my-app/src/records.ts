type Student = {
  id: number;
  name: string;
};

type Students = Record<string, Student>;

const students: Students = {
  isdfsdsdf: { id: 1234875601, name: "Suraj" },
  dfdfsdffq: { id: 1235759499, name: "Raj" },
};
