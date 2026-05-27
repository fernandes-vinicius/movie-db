import { getImageUrl } from "./get-image-url";

jest.mock("@/lib/env", () => ({
  env: { VITE_TMDB_IMAGE_BASE_URL: "https://image.tmdb.org/t/p" },
}));

describe("getImageUrl", () => {
  it("retorna null quando path é null", () => {
    expect(getImageUrl(null)).toBeNull();
  });

  it("usa tamanho w500 por padrão", () => {
    expect(getImageUrl("/poster.webp")).toBe(
      "https://image.tmdb.org/t/p/w500/poster.webp",
    );
  });

  it("aplica o tamanho informado", () => {
    expect(getImageUrl("/poster.webp", "w342")).toBe(
      "https://image.tmdb.org/t/p/w342/poster.webp",
    );
  });

  it("aplica tamanho original", () => {
    expect(getImageUrl("/backdrop.webp", "original")).toBe(
      "https://image.tmdb.org/t/p/original/backdrop.webp",
    );
  });
});
