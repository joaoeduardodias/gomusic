"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface ThemeResponse {
  success: boolean;
  data?: {
    id: string;
    name: string;
  }[];
  error?: string;
}

export async function getThemes(): Promise<ThemeResponse> {
  try {
    const themes = await prisma.theme.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    // // Revalidate the path to ensure fresh data
    // revalidatePath("/themes");

    return {
      success: true,
      data: themes,
    };
  } catch (error) {
    console.error("Error fetching themes:", error);

    // Check if it's a Prisma-specific error
    if (error instanceof Error && "code" in error) {
      const prismaError = error as {
        code: string;
        meta?: { target?: string[] };
      };

      // Handle specific Prisma errors
      if (prismaError.code === "P2002") {
        return {
          success: false,
          error: `A unique constraint violation occurred. Field: ${
            prismaError.meta?.target?.[0] || "unknown"
          }`,
        };
      }
    }

    // Generic error response
    return {
      success: false,
      error: "An error occurred while fetching themes. Please try again later.",
    };
  } finally {
    await prisma.$disconnect();
  }
}
