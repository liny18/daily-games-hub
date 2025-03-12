"use client";

import { useState, useEffect } from "react";
import { Game } from "@/lib/games-data";
import GamesGrid from "@/components/games-grid";

export default function FavoritesPage() {
  const [favoriteGames, setFavoriteGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadFavorites() {
      try {
        // Load favorites from localStorage
        const favoriteIds = JSON.parse(
          localStorage.getItem("favoriteGames") || "[]"
        );

        if (favoriteIds.length === 0) {
          setFavoriteGames([]);
          setIsLoading(false);
          return;
        }

        // Fetch favorite games from API
        const response = await fetch("/api/favorites", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ favoriteIds }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch favorite games");
        }

        const data = await response.json();
        setFavoriteGames(data.games);
      } catch (error) {
        console.error("Error loading favorites:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadFavorites();
  }, []);

  return (
    <div className="space-y-8">
      <section className="py-6">
        <h1 className="text-3xl font-bold tracking-tight">Your Favorites 🌟</h1>
        <p className="mt-2 text-muted-foreground">
          Games you&apos;ve marked as favorites
        </p>
      </section>

      {isLoading ? (
        <div className="py-12 text-center">Loading your favorites...</div>
      ) : favoriteGames.length > 0 ? (
        <GamesGrid games={favoriteGames} />
      ) : (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">
            You haven&apos;t added any favorites yet. Click the star icon on
            games to add them to your favorites.
          </p>
        </div>
      )}
    </div>
  );
}
