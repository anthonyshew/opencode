import type { FileDiff } from "@opencode-ai/schema/file-diff"
import type { Location } from "@opencode-ai/schema/location"
import type { Session } from "@opencode-ai/schema/session"
import type { Vcs } from "@opencode-ai/schema/vcs"
import type { Hooks } from "./registration.js"

export interface VcsDiffEvent {
  readonly sessionID: Session.ID
  readonly location: Location.Info
  readonly mode: Vcs.Mode
  readonly context?: number
  result?: ReadonlyArray<FileDiff.Info>
}

export interface VcsHooks {
  readonly diff: VcsDiffEvent
}

export interface VcsDomain {
  readonly hook: Hooks<VcsHooks>
}
