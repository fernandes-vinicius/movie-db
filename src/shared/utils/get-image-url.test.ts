import { getImageUrl } from "./get-image-url";

jest.mock("@/lib/env", () => ({
  env: { VITE_TMDB_IMAGE_BASE_URL: "https://image.tmdb.org/t/p" },
}));

describe("getImageUrl", () => {
  it("retorna null quando path é null", () => {
    expect(getImageUrl(null)).toBeNull();
  });

  it("usa tamanho w500 por padrão", () => {
    expect(getImageUrl("/poster.jpg")).toBe(
      "https://image.tmdb.org/t/p/w500/poster.jpg",
    );
  });

  it("aplica o tamanho informado", () => {
    expect(getImageUrl("/poster.jpg", "w342")).toBe(
      "https://image.tmdb.org/t/p/w342/poster.jpg",
    );
  });

  it("aplica tamanho original", () => {
    expect(getImageUrl("/backdrop.jpg", "original")).toBe(
      "https://image.tmdb.org/t/p/original/backdrop.jpg",
    );
  });
});
