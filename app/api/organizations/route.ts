import { NextResponse } from "next/server";
import {
  createOrganization,
  getOrganizations,
} from "@/services/organization.service";

export async function GET() {
  try {
    const organizations = await getOrganizations();

    return NextResponse.json(organizations);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch organizations" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const organization = await createOrganization(body.name);

    return NextResponse.json(organization);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create organization" },
      { status: 500 }
    );
  }
}