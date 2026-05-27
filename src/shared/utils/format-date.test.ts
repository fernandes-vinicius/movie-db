import { formatDate, formatYear } from "./format-date";

describe("formatDate", () => {
  it("retorna '—' para string vazia", () => {
    expect(formatDate("")).toBe("—");
  });

  it("formata data no padrão pt-BR", () => {
    expect(formatDate("2010-07-16")).toBe("16 de julho de 2010");
  });

  it("formata corretamente o primeiro dia do mês", () => {
    expect(formatDate("2023-01-01")).toBe("1 de janeiro de 2023");
  });

  it("formata corretamente o último dia do ano", () => {
    expect(formatDate("2022-12-31")).toBe("31 de dezembro de 2022");
  });
});

describe("formatYear", () => {
  it("retorna '—' para string vazia", () => {
    expect(formatYear("")).toBe("—");
  });

  it("extrai o ano corretamente", () => {
    expect(formatYear("2010-07-16")).toBe("2010");
  });

  it("retorna o ano como string", () => {
    expect(typeof formatYear("2023-01-01")).toBe("string");
  });
});
