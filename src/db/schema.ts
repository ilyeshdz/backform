import { pgTable, uuid, text, timestamp, boolean, jsonb, integer, varchar, pgEnum } from "drizzle-orm/pg-core";

export const formFieldTypeEnum = pgEnum("form_field_type", [
  "text",
  "email",
  "number",
  "textarea",
  "select",
  "multiselect",
  "checkbox",
  "radio",
  "date",
  "time",
  "datetime",
  "file",
  "url",
  "phone",
  "rating",
  "scale"
]);

export const responseStatusEnum = pgEnum("response_status", [
  "draft",
  "submitted",
  "completed"
]);

export const forms = pgTable("forms", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  status: varchar("status", { length: 50 }).default("draft").notNull(),
  settings: jsonb("settings").$type<{
    allowMultipleSubmissions: boolean;
    collectEmail: boolean;
    showProgressBar: boolean;
    customThankYouMessage: string;
    redirectUrl: string;
    isPublic: boolean;
    limitSubmissions: boolean;
    maxSubmissions: number;
    startDate: Date | null;
    endDate: Date | null;
  }>(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});

export const formFields = pgTable("form_fields", {
  id: uuid("id").primaryKey().defaultRandom(),
  formId: uuid("form_id").references(() => forms.id, { onDelete: "cascade" }).notNull(),
  label: varchar("label", { length: 255 }).notNull(),
  description: text("description"),
  type: formFieldTypeEnum("type").notNull(),
  required: boolean("required").default(false).notNull(),
  order: integer("order").notNull(),
  placeholder: text("placeholder"),
  defaultValue: text("default_value"),
  validation: jsonb("validation").$type<{
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    pattern?: string;
    customRules?: Record<string, unknown>;
  }>(),
  options: jsonb("options").$type<Array<{
    label: string;
    value: string;
    order: number;
  }>>(),
  conditionalLogic: jsonb("conditional_logic").$type<{
    showWhen: {
      fieldId: string;
      operator: "equals" | "not_equals" | "contains" | "greater_than" | "less_than";
      value: unknown;
    }[];
  }>(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});

export const formResponses = pgTable("form_responses", {
  id: uuid("id").primaryKey().defaultRandom(),
  formId: uuid("form_id").references(() => forms.id, { onDelete: "cascade" }).notNull(),
  status: responseStatusEnum("status").default("draft").notNull(),
  ipAddress: varchar("ip_address", { length: 45 }),
  userAgent: text("user_agent"),
  completionTime: integer("completion_time"), // in seconds
  submittedAt: timestamp("submitted_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});

// Form field responses table - answers to individual fields
export const fieldResponses = pgTable("field_responses", {
  id: uuid("id").primaryKey().defaultRandom(),
  formResponseId: uuid("form_response_id").references(() => formResponses.id, { onDelete: "cascade" }).notNull(),
  fieldId: uuid("field_id").references(() => formFields.id, { onDelete: "cascade" }).notNull(),
  value: text("value"),
  fileUrl: text("file_url"),
  fileName: text("file_name"),
  fileSize: integer("file_size"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});

// Form templates table - reusable form templates
export const formTemplates = pgTable("form_templates", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  category: varchar("category", { length: 100 }),
  tags: jsonb("tags").$type<string[]>(),
  isPublic: boolean("is_public").default(true).notNull(),
  usageCount: integer("usage_count").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});

// Template fields table - fields for form templates
export const templateFields = pgTable("template_fields", {
  id: uuid("id").primaryKey().defaultRandom(),
  templateId: uuid("template_id").references(() => formTemplates.id, { onDelete: "cascade" }).notNull(),
  label: varchar("label", { length: 255 }).notNull(),
  description: text("description"),
  type: formFieldTypeEnum("type").notNull(),
  required: boolean("required").default(false).notNull(),
  order: integer("order").notNull(),
  placeholder: text("placeholder"),
  defaultValue: text("default_value"),
  validation: jsonb("validation"),
  options: jsonb("options"),
  conditionalLogic: jsonb("conditional_logic"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});

// Form analytics table - for tracking form performance
export const formAnalytics = pgTable("form_analytics", {
  id: uuid("id").primaryKey().defaultRandom(),
  formId: uuid("form_id").references(() => forms.id, { onDelete: "cascade" }).notNull(),
  date: timestamp("date").notNull(),
  views: integer("views").default(0).notNull(),
  starts: integer("starts").default(0).notNull(),
  completions: integer("completions").default(0).notNull(),
  averageCompletionTime: integer("average_completion_time"), // in seconds
  bounceRate: integer("bounce_rate"), // percentage
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});


// Type exports for TypeScript
export type Form = typeof forms.$inferSelect;
export type NewForm = typeof forms.$inferInsert;

export type FormField = typeof formFields.$inferSelect;
export type NewFormField = typeof formFields.$inferInsert;

export type FormResponse = typeof formResponses.$inferSelect;
export type NewFormResponse = typeof formResponses.$inferInsert;

export type FieldResponse = typeof fieldResponses.$inferSelect;
export type NewFieldResponse = typeof fieldResponses.$inferInsert;

export type FormTemplate = typeof formTemplates.$inferSelect;
export type NewFormTemplate = typeof formTemplates.$inferInsert;

export type TemplateField = typeof templateFields.$inferSelect;
export type NewTemplateField = typeof templateFields.$inferInsert;

export type FormAnalytics = typeof formAnalytics.$inferSelect;
export type NewFormAnalytics = typeof formAnalytics.$inferInsert;