describe("Fluxo completo de busca e favoritos", () => {
    it("Busca uma carta, interage com o zoom, favorita e remove dos favoritos", () => {
        // 1. Acessa a página principal
        cy.visit("http://localhost:3000");
        cy.wait(1000);

        // 2. Digita o nome da carta
        cy.get("input[placeholder*='Magic']").type("Sheoldred, the Apocalypse");
        cy.wait(1000);

        // 3. Aguarda a carta aparecer e clica na imagem para dar zoom
        cy.contains("Sheoldred, the Apocalypse").should("be.visible");
        cy.wait(1000);
        cy.get("img[alt='Sheoldred, the Apocalypse']").first().click();
        cy.wait(1000);

        // 4. Fecha o zoom (clicando no overlay)
        cy.get("div[role='dialog']").click();
        cy.wait(1000);

        // 5. Clica no botão de favoritar
        cy.contains("Favoritar").click();
        cy.wait(1000);

        // 6. Vai para a página de favoritos
        cy.contains("Favoritos").click();
        cy.wait(1000);

        // 7. Verifica que a carta está lá e remove dos favoritos
        cy.contains("Sheoldred, the Apocalypse").should("be.visible");
        cy.contains("Remover dos Favoritos").click();
        cy.wait(1000);

        // 8. Volta para a página principal
        cy.contains("Busca").click();
    });
});