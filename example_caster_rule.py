from dragonfly import MappingRule, Choice, Function, Pause, Dictation

from castervoice.lib.const import CCRType
from castervoice.lib.actions import Text, Key
from castervoice.lib.ctrl.mgr.rule_details import RuleDetails
from castervoice.lib.merge.state.short import R
from castervoice.lib.merge.mergerule import MergeRule
from castervoice.lib.context import paste_string_without_altering_clipboard
import requests


def execute_command(command_name):
    requests.get(f"http://localhost:44328/{command_name}")


class RapidCode(MergeRule):
    pronunciation = "rapid code"
    mapping = {
        "to end of line": R(
            Function(execute_command, command_name="cursorLineEndSelect")
        ),
        "comment": R(Function(execute_command, command_name="editor.action.commentLine")),
    }

    extras = [
        Dictation("dictation"),
    ]


def get_rule():
    details = RuleDetails(
        executable="code", title="Visual Studio Code", ccrtype=CCRType.APP
    )

    return RapidCode, details
