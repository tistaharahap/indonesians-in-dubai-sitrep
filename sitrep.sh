#!/bin/sh

claude --permission-mode bypassPermissions --system-prompt "$(< ./SOUL.md)" --chrome
