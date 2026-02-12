# Bloom Admin Dashboard - Makefile
# 项目常用命令集合

# 变量定义
PROJECT_NAME := bloom-admin
DOCKER_IMAGE := $(PROJECT_NAME)
DOCKER_CONTAINER := $(PROJECT_NAME)-container
PORT := 3000
BUILD_DIR := build

# 默认目标
.DEFAULT_GOAL := help

# ============================================
# 开发命令
# ============================================

## dev: 启动开发服务器
dev:
	bun run dev

## build: 构建生产版本
build:
	bun run build

## preview: 预览生产构建
preview:
	bun run preview

## typecheck: TypeScript 类型检查
typecheck:
	bun run typecheck

## install: 安装项目依赖
install:
	bun install

## update: 更新项目依赖
update:
	bun update

## clean: 清理构建产物
clean:
	rm -rf $(BUILD_DIR)
	rm -rf node_modules
	rm -rf .vite

# ============================================
# Docker 命令
# ============================================

## docker-build: 构建 Docker 镜像
docker-build:
	docker build -t $(DOCKER_IMAGE):latest .

## docker-run: 运行 Docker 容器
docker-run:
	docker run -d --name $(DOCKER_CONTAINER) -p 80:80 $(DOCKER_IMAGE):latest

## docker-stop: 停止 Docker 容器
docker-stop:
	docker stop $(DOCKER_CONTAINER) || true
	docker rm $(DOCKER_CONTAINER) || true

## docker-logs: 查看 Docker 容器日志
docker-logs:
	docker logs -f $(DOCKER_CONTAINER)

## docker-shell: 进入 Docker 容器
docker-shell:
	docker exec -it $(DOCKER_CONTAINER) /bin/sh

## docker-rmi: 删除 Docker 镜像
docker-rmi: docker-stop
	docker rmi $(DOCKER_IMAGE):latest || true

## docker-rebuild: 重新构建并运行 Docker
docker-rebuild: docker-stop docker-rmi docker-build docker-run
	@echo "Docker container is running at http://localhost"

# ============================================
# Git 命令
# ============================================

## git-status: 查看 Git 状态
git-status:
	git status

## git-add: 添加所有更改
git-add:
	git add -A

## git-commit: 提交更改（需要传入 msg 参数，如 make git-commit msg="feat: 新功能"）
git-commit:
ifndef msg
	@echo "错误: 请提供提交信息，如 make git-commit msg='feat: 新功能'"
	@exit 1
endif
	git commit -m "$(msg)"

## git-push: 推送到远程仓库
git-push:
	git push origin main

## git-pull: 拉取远程更新
git-pull:
	git pull origin main

# ============================================
# 帮助
# ============================================

## help: 显示帮助信息
help:
	@echo ""
	@echo "╔══════════════════════════════════════════════════════════╗"
	@echo "║           Bloom Admin Dashboard - 命令手册               ║"
	@echo "╚══════════════════════════════════════════════════════════╝"
	@echo ""
	@echo "开发命令:"
	@sed -n 's/^##//p' $(MAKEFILE_LIST) | grep -E 'dev|build|preview|typecheck|install|update|clean' | column -t -s ':'
	@echo ""
	@echo "Docker 命令:"
	@sed -n 's/^##//p' $(MAKEFILE_LIST) | grep 'docker' | column -t -s ':'
	@echo ""
	@echo "Git 命令:"
	@sed -n 's/^##//p' $(MAKEFILE_LIST) | grep 'git' | column -t -s ':'
	@echo ""
	@echo "示例:"
	@echo "  make dev              # 启动开发服务器"
	@echo "  make docker-rebuild   # 重新构建并运行 Docker"
	@echo "  make git-commit msg='feat: 新功能'  # 提交更改"
	@echo ""

.PHONY: dev build preview typecheck install update clean \
        docker-build docker-run docker-stop docker-logs docker-shell docker-rmi docker-rebuild \
        git-status git-add git-commit git-push git-pull help
