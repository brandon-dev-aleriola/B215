json.extract! note, :id, :content, :tool_id, :user_id, :created_at, :updated_at
json.url note_url(note, format: :json)
