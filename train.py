from multiprocessing.pool import worker

from ultralytics import YOLO

# 初始化模型
model = YOLO("yolo11n.pt")  # 使用预训练模型

# 开始训练
model.train(
    data="dataset/data.yaml",  # 指定 data.yaml 文件路径
    epochs=100,               # 设置训练轮数
    imgsz=640,                # 输入图像大小
    batch=48,
    workers=0,
    device='0',
    name="custom_model"       # 训练任务名称
)
