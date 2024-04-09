type AdminType = {
  id: number;
  name: string;
  role: string;
};

const adminMap = new Map<string, AdminType>();

adminMap.set("oiuqreqer", { id: 143443, name: "Alex", role: "developer" });
adminMap.set("nhrereqer", { id: 143446, name: "John", role: "cloud engineer" });
