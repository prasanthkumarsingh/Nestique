// No names, contact details, requirements, URLs or free-text fields in events.
export function trackEnquiry(form: "consultation" | "contact", service: string, city: string) {
  const knownCities = ["Visakhapatnam", "Hyderabad", "Bangalore", "Vijayawada", "Mumbai", "Pune"];
  const knownServices = ["architecture", "construction", "interior", "renovation", "civil", "landscape", "office-planning", "commercial-construction", "commercial-interiors", "facade-elevation"];
  window.dispatchEvent(new CustomEvent("nestique:enquiry", { detail: {
    event: "generate_lead", form,
    service: knownServices.includes(service) ? service : "other",
    city: knownCities.includes(city) ? city : "other",
  } }));
}
